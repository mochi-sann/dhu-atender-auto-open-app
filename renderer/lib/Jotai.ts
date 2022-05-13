import { atom } from "jotai";
type ClassRoomTablesType = { table: boolean[][] };

atom<ClassRoomTablesType>({
  table: [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ],
});
