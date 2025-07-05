"use client"

import React from 'react'
import HistoryItem from '../atoms/HistoryItem'
import useDragAndDrop from '@/hooks/useDragAndDrop'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'
import Button from '../atoms/Button'
import { MdDelete } from 'react-icons/md'
import { clearSearches } from '@/lib/redux/slice/searchData/recentSearchSlice'
import { getByCity } from '@/lib/redux/slice/weatherData/action'


const HistoryList = () => {
    const dispatch = useDispatch();
    const searchData = useSelector((state: RootState) => state.recentSearch.searches);
    const { historyItems, draggingId, handleDragStart, handleDrop, handleDragOver } = useDragAndDrop(searchData)
    return (
        <div className='flex flex-col gap-3'>

            {
                historyItems.length > 0 ? historyItems.map(item => (
                    <HistoryItem
                        key={item.cityCode}
                        id={item.cityCode}
                        onDragStart={handleDragStart}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        city={item.city}
                        isDragging={draggingId === item.cityCode}
                        onClick={() => getByCity(item.city)}

                    />
                )) : (
                    <p className='text-center'>No history</p>
                )
            }
            {
                historyItems.length > 0 && (
                    <Button onClick={() => dispatch(clearSearches())} icon={MdDelete} className='self-end text-sm bg-red-500 '>
                        Clear History
                    </Button>
                )
            }

        </div>
    )
}

export default HistoryList
