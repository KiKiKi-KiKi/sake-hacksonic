'use client';

import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  FormControl,
  Heading,
  Spinner,
} from '@chakra-ui/react';

import { SignOutButton } from '@/components/SignOutButton';
import { APP_NAME } from '@/config';
import { useAuth, useAuthMutators } from '@/hooks/useAuth';
import { nl2br } from '@/utilities/nl2br';

export const SignUp: FC = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { signIn, isLoading, error } = useAuthMutators();

  const handleSignUp = () => signIn();

  useEffect(() => {
    if (!user) {
      return;
    }

    router.replace('/');
  }, [user, router]);

  return (
    <Box w='100vw' h='100vh'>
      <Container py='6'>
        <Card maxW='24rem' mx='auto'>
          <CardHeader textAlign='center'>
            <Heading as='h1' size='md'>
              {APP_NAME}
            </Heading>
          </CardHeader>
          <CardBody>
            {error && (
              <Alert status='error' mb='4'>
                <AlertIcon />
                {nl2br(error.message)}
              </Alert>
            )}
            <FormControl pb='3' textAlign='center'>
              <Button
                type='button'
                onClick={handleSignUp}
                isLoading={isLoading}
                colorScheme='teal'
                size='lg'
                width='full'
                maxW='17.5rem'
              >
                Sign up{isLoading && <Spinner />}
              </Button>
            </FormControl>
          </CardBody>
        </Card>
        <Center mt='4'>
          <SignOutButton variant='ghost' />
        </Center>
      </Container>
    </Box>
  );
};
