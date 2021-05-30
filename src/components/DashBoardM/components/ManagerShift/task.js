import * as api from "../../../Util/api";

export function ownersList() {
  const staffListResponse = api.getAllStaffs();
  return staffListResponse.data;
}

export const owners = [
  {
    text: "Tianqi Liao",
    id: 124,
  },
  {
    text: "Shuhao Liu",
    id: 125,
  },
  {
    text: "Zelong Wang",
    id: 126,
  },
  {
    text: "YUN-TUNG SHIH",
    id: 127,
  },
  {
    text: "Jiahao Ai",
    id: 128,
  },
  {
    text: "Jiahao Xu",
    id: 128,
  },
];
