import React from 'react'
import { MdOutlineDragHandle } from 'react-icons/md'

interface HistoryItemProps {
    id: number
    onDragStart: (e: React.DragEvent, id: number) => void
    onDrop: (e: React.DragEvent, targetId: number) => void
    onDragOver: (e: React.DragEvent) => void
    city: string
    isDragging: boolean
}

const HistoryItem = ({ id, onDragStart, onDrop, onDragOver, city, isDragging }: HistoryItemProps) => {
    return (
        <div
            className={`bg-white/10 rounded-xl p-3 flex gap-3 items-center `}
            draggable
            onDragStart={(e) => onDragStart(e, id)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, id)}
            style={{
                transform: isDragging ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                cursor: isDragging ? 'move' : 'grab'
            }}
        >
            <MdOutlineDragHandle />
            <p className='text-sm font-bold'>
                {city}
            </p>
        </div>
    )
}

export default HistoryItem
