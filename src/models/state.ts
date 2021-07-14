import { Column } from "./column";
import { Task } from "./task";

export type TaskMap = Record<string, Task>
export type ColumnMap = Record<string,  Column>
export type State = {
    tasks: TaskMap,
    columns: ColumnMap,
    columnOrder: string[],
}