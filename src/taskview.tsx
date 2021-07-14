import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Task } from './models/task';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

interface TaskProps {
  index: number
  task: Task
}

export function TaskView({index,task}: TaskProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef} 
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
}

