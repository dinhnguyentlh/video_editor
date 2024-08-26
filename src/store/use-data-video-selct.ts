import { create } from 'zustand';

interface IVideos{
    title:string;
    src:string;
    id:string
}
interface IData{
    data:IVideos[]
}
const useDataVideos = create<IData>((set) => ({
  data:[],
  setData:(listData)=>set({ data: [...listData] }),

}));

export default useDataVideos;
