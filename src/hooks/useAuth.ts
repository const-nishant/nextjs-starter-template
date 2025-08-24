import { useCallback } from 'react';

import { apiClient } from '@/services/apiClient';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import type { LoginFormData, RegisterFormData, User } from '@/types';

export function useAuth() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, login, logout, setLoading } =
    useAuthStore();

  const signIn = useCallback(
    async (credentials: LoginFormData) => {
      try {
        setLoading(true);
        const response = await apiClient.post<{ user: User; token: string }>(
          '/auth/login',
          credentials
        );

        if (response.success) {
          login(response.data.user, response.data.token);
          toast.success('Welcome back!');
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Invalid credentials');
      } finally {
        setLoading(false);
      }
    },
    [login, router, setLoading]
  );

  const signUp = useCallback(
    async (userData: RegisterFormData) => {
      try {
        setLoading(true);
        const response = await apiClient.post<{ user: User; token: string }>(
          '/auth/register',
          userData
        );

        if (response.success) {
          login(response.data.user, response.data.token);
          toast.success('Account created successfully!');
          router.push('/dashboard');
        }
      } catch (error) {
        console.error('Registration error:', error);
        toast.error('Failed to create account');
      } finally {
        setLoading(false);
      }
    },
    [login, router, setLoading]
  );

  const signOut = useCallback(() => {
    logout();
    toast.success('Signed out successfully');
    router.push('/');
  }, [logout, router]);

  const checkAuth = useCallback(async () => {
    try {
      const response = await apiClient.get<User>('/auth/me');
      if (response.success) {
        useAuthStore.getState().setUser(response.data);
      }
    } catch (error) {
      console.error('Auth check error:', error);
      logout();
    }
  }, [logout]);

  return {
    user,
    isAuthenticated,
    isLoading,
    signIn,
    signUp,
    signOut,
    checkAuth,
  };
}
