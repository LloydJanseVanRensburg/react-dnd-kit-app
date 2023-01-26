import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Typography } from '@mui/material';
import React from 'react';

interface ISortableItemsProps {
    id: string;
}

const SortableItems = (props: ISortableItemsProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <Box ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Box
                sx={{
                    border: '1px solid #333',
                    my: 2,
                    p: 2,
                    backgroundColor: '#f3f3f3',
                }}
            >
                <Typography>{props.id}</Typography>
            </Box>
        </Box>
    );
};

export default SortableItems;
