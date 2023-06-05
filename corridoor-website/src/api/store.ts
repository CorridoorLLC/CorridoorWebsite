import create from 'zustand';

type Store = {
  nameOfUser: string | null;
  emailOfUser: string | null;
  setUser: (nameOfUser: string | null) => void;
  setEmail: (emailOfUser: string | null) => void;
  clearUser: () => void;
};

export const useStore = create<Store>((set) => ({
  nameOfUser: null,
  emailOfUser: null,
  setUser: (nameOfUser) => {
    console.log("setting user");
    set(prevState => {
      return {...prevState, nameOfUser: nameOfUser};
    });
  },
  setEmail: (emailOfUser) => (set({ emailOfUser })),
  clearUser: () => (
    console.log("clearing user"),
    set({ nameOfUser: null, emailOfUser: null })),
}));
