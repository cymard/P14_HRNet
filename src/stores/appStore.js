import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useAppStore = create(
    devtools(set => ({
        test: 'test',
    }))
);

export default useAppStore;
