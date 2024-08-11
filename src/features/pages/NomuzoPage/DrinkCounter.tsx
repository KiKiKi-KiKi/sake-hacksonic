'use client';

import Image from 'next/image';
import { FC, ReactNode, useCallback, useMemo } from 'react';

import { Box, Button, Text, useToast } from '@chakra-ui/react';

import { IDrinkData } from '@/@types/drinks';
import { DrinkData } from '@/atoms/drank.atom';
import { DRINKS_DATA } from '@/config';
import { useDrankMutators } from '@/hooks/useDrank';

const DRINK = Object.values(DRINKS_DATA);

type OnAddDrinkFunc = (
  props: { icon: ReactNode } & Omit<DrinkData, 'timestamp'>,
) => void;

export const DrinkCounter: FC = () => {
  const toast = useToast();
  const { addDrink } = useDrankMutators();

  const handleAddDrink = useCallback<OnAddDrinkFunc>(
    ({ icon, id, name, amount, alcohol }) => {
      toast({
        render: () => icon,
        position: 'bottom-right',
        duration: 2000,
        containerStyle: {
          background: 'yellow.200',
          padding: '0.5rem',
          borderRadius: '50%',
          minWidth: 'fit-content',
        },
      });
      addDrink({
        id,
        name,
        amount,
        alcohol,
      });
    },
    [toast, addDrink],
  );

  return (
    <Box display='flex' flexWrap='wrap' gap='4'>
      {DRINK.map((item) => (
        <DrinkButton key={item.id} onAddDrink={handleAddDrink} {...item} />
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
  const IconImage = useMemo(() => {
    return <Image src={icon} width={20} height={20} alt={name} />;
  }, [icon, name]);

  const handleAdd = useCallback(() => {
    onAddDrink({ icon: IconImage, id, name, amount, alcohol });
  }, [id, name, amount, alcohol, IconImage, onAddDrink]);

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
