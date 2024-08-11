'use client';

import Image from 'next/image';
import { FC, ReactNode, useCallback, useMemo } from 'react';

import { Box, Button, Text, useToast } from '@chakra-ui/react';

import { IDrinkData } from '@/@types/drinks';
import { DRINKS_DATA } from '@/config';

const drinks = Object.values(DRINKS_DATA);

type OnAddDrinkFunc = (props: { icon: ReactNode }) => void;

export const NomuzoCounter: FC = () => {
  const toast = useToast();

  const addDrink = useCallback<OnAddDrinkFunc>(
    ({ icon }) => {
      console.log('addDrink');
      toast({
        render: () => icon,
        position: 'bottom-right',
        duration: 1000,
        containerStyle: {
          background: 'yellow.200',
          padding: '0.5rem',
          borderRadius: '50%',
          minWidth: 'fit-content',
        },
      });
    },
    [toast],
  );

  return (
    <Box display='flex' flexWrap='wrap' gap='4'>
      {drinks.map((item) => (
        <DrinkButton key={item.id} onAddDrink={addDrink} {...item} />
      ))}
    </Box>
  );
};

type DrinkButtonProps = {
  onAddDrink: OnAddDrinkFunc;
} & IDrinkData;

const DrinkButton: FC<DrinkButtonProps> = ({
  id,
  name,
  amount,
  notice,
  alcohol,
  icon,
  onAddDrink,
}) => {
  const iconImage = useMemo(() => {
    return <Image src={icon} width={20} height={20} alt={name} />;
  }, [icon]);

  const handleAdd = useCallback(() => {
    console.log(id, amount, alcohol);
    onAddDrink({ icon: iconImage });
  }, [id, amount, alcohol, iconImage, onAddDrink]);

  return (
    <Button
      size='lg'
      width='100px'
      height='100px'
      p='5px'
      overflow='hidden'
      title={`${name} ${amount}ml`}
      onClick={handleAdd}
    >
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box as='figure' width='40px'>
          <Image src={icon} width={40} height={40} alt={name} />
        </Box>
        <Text as='span' fontSize='10px' mt='2' mb='1'>
          {name} {amount}ml
        </Text>
        {notice && (
          <Text as='small' fontSize='10px' color='gray.500'>
            ({notice})
          </Text>
        )}
      </Box>
    </Button>
  );
};
