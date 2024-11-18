export interface User {
  id: string;
  name: string;
  email: string;
}

const userServices = {
  getCurrentUser: async (): Promise<User | null> => {
    // Mock data - remove when real API is ready
    return {
      id: "1",
      name: "Test User",
      email: "test@example.com",
    };
  },
};

export default userServices;
