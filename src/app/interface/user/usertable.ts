import { User } from "./user";

export interface Usertable {

    current_page: number;
    total_item: number;
    total_page: number;
    item_per_page: number;
    index_start: number,
    index_end: number,
    data: User[];

}
