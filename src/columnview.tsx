import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import { TaskView }  from './taskview';
import { Column } from './models/column';
import { Task } from './models/task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

interface ColumnProps {
  column: Column
  tasks:Task[]
}

export default function ColumnView({column, tasks}:ColumnProps) {
    return (
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id}>
          {provided => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task:Task, index:number) => (
                <TaskView key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
}
