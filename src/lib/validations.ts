import { z } from 'zod';

// User validation schemas
export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().min(1, 'Name is required'),
  avatar: z.string().url().optional(),
  role: z.enum(['user', 'admin']),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const updateUserSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  email: z.string().email().optional(),
  avatar: z.string().url().optional(),
});

// Authentication validation schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

// API response validation schemas
export const apiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema,
    message: z.string(),
    success: z.boolean(),
  });

export const paginatedResponseSchema = <T extends z.ZodTypeAny>(
  dataSchema: T
) =>
  z.object({
    data: z.array(dataSchema),
    pagination: z.object({
      page: z.number(),
      limit: z.number(),
      total: z.number(),
      totalPages: z.number(),
    }),
  });

// Error response validation schema
export const errorResponseSchema = z.object({
  message: z.string(),
  errors: z.record(z.array(z.string())).optional(),
  statusCode: z.number(),
});

// Form validation schemas
export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const profileFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
});

// Search and filter schemas
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
});

export const filterSchema = z.object({
  category: z.string().optional(),
  status: z.enum(['active', 'inactive', 'pending']).optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});

// Export types
export type User = z.infer<typeof userSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ProfileFormData = z.infer<typeof profileFormSchema>;
export type SearchParams = z.infer<typeof searchSchema>;
export type FilterParams = z.infer<typeof filterSchema>;
