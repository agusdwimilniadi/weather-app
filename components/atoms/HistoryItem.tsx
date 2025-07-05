import React from 'react'
import { MdOutlineDragHandle } from 'react-icons/md'

interface HistoryItemProps {
    id: number
    onDragStart: (e: React.DragEvent, id: number) => void
    onDrop: (e: React.DragEvent, targetId: number) => void
    onDragOver: (e: React.DragEvent) => void
    city: string
    isDragging: boolean
    onClick?: () => void
}

const HistoryItem = ({ id, onDragStart, onDrop, onDragOver, city, isDragging, onClick }: HistoryItemProps) => {
    return (
        <div
            className={`bg-white/10 rounded-xl p-3 flex gap-3 items-center  hover:scale-105 transition-all duration-300 ease-in-out`}
            draggable
            onDragStart={(e) => onDragStart(e, id)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, id)}
            style={{
                transform: isDragging ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                cursor: isDragging ? 'move' : 'pointer'
            }}
            onClick={onClick}
        >
            <MdOutlineDragHandle className='hover:cursor-grab' />
            <p className='text-sm font-bold'>
                {city}
            </p>
        </div>
    )
}

export default HistoryItem
