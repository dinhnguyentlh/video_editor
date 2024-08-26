import { create } from 'zustand';

interface IVideos{
    title: string;
    src: string;
    resourceId: string;
}
interface IData{
    data:IVideos[];
    setData:(listData: IVideos[] ) => void;
}
const useDataVideos = create<IData>((set) => ({
  data:[],
  setData:(listData)=>set({ data: [...listData] }),

}));

export default useDataVideos;
