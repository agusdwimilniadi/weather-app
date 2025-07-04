
import { updateFullData } from '@/lib/redux/slice/searchData/recentSearchSlice'
import { store } from '@/lib/redux/store'
import { useEffect, useState } from 'react'

interface DataHistory {
    cityCode: number
    city: string
    timestamp: number;
}

const useDragAndDrop = (data: DataHistory[]) => {
    const [historyItems, setHistoryItems] = useState<DataHistory[]>(data)
    const [draggingId, setDraggingId] = useState<number | null>(null)

    useEffect(() => {
        setHistoryItems(data)
    }, [data])

    const handleDragStart = (e: React.DragEvent, id: number) => {
        setDraggingId(id)
        e.dataTransfer.setData('draggedItem', id.toString())
    }

    const handleDrop = (e: React.DragEvent, targetId: number) => {
        e.preventDefault()
        const draggedItemId = e.dataTransfer.getData('draggedItem')
        console.log({ draggedItemId })

        const firstPositionIndex = historyItems.findIndex(item => item.cityCode === parseInt(draggedItemId))
        console.log({ firstPositionIndex })
        const secondPositionIndex = historyItems.findIndex(item => item.cityCode === targetId)
        console.log({ secondPositionIndex })

        const updatedItems = [...historyItems]
        const [draggedItem] = updatedItems.splice(firstPositionIndex, 1)
        updatedItems.splice(secondPositionIndex, 0, draggedItem)

        setHistoryItems(updatedItems)
        store.dispatch(updateFullData(updatedItems))
        setDraggingId(null)
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }

    return {
        historyItems,
        draggingId,
        handleDragStart,
        handleDrop,
        handleDragOver,
    }
}

export default useDragAndDrop
