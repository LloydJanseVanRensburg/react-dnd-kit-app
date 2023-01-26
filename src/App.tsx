import { closestCenter, DndContext, DragEndEvent } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import SortableItems from './components/SortableItem';

const App = () => {
    const [languages, setLanguages] = useState([
        'JavaScript',
        'Python',
        'TypeScript',
    ]);

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over?.id) {
            setLanguages((prev) => {
                const activeIndex = prev.indexOf(active.id as string);
                const overIndex = prev.indexOf(over.id as string);

                return arrayMove(prev, activeIndex, overIndex);
            });
        }
    }

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <Box>
                <Container maxWidth="xs" sx={{ p: 2 }}>
                    <Typography>The best programming languages</Typography>

                    <SortableContext
                        items={languages}
                        strategy={verticalListSortingStrategy}
                    >
                        {languages.map((item) => (
                            <SortableItems key={item} id={item} />
                        ))}
                    </SortableContext>
                </Container>
            </Box>
        </DndContext>
    );
};

export default App;
