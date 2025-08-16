export interface TodoItem {
  id?: number;
  title: string;
  description: string;
  status: 'in-progress' | 'completed';
  deadline: string;
}
