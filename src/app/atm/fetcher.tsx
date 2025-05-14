import { create } from "zustand";

interface State {
  data: any;
}

interface Actions {
  setData: (data: any) => void;
}

type Store = State & Actions;

export async function getPosts() {
  const data = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME`,
  );
  return await data.json();
}

export class DataLoader {
  private _isInit: boolean = false;
  private _store = create<Store>((set) => ({
    data: undefined,
    setData: (data) => set((state) => ({ ...state, data })),
  }));

  constructor() {}

  public async fetch() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}blog`, {
      cache: "force-cache",
    });
    const posts: any[] = await data.json();

    if (!this._isInit) {
      console.log("init");

      this._store.getState().setData(posts);
      this._isInit = true;
    }
  }

  public useData() {
    return this._store();
  }
}
