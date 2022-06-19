import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType ='high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
    {_id: 6, name: 'Yana', priority: 'high'},
    {_id: 7, name: 'football', priority: 'middle'}
]

// pure helper functions
export const filterAffairs = (affairs:  Array<AffairType>, filter: FilterType): Array<AffairType>  => { // ЗДЕСЯ
    /*if (filter === 'high') {
        return affairs.filter(ar => ar.priority === 'high')
    } else if (filter === 'middle') {
        return affairs.filter(ar => ar.priority === 'middle')
    } else if (filter === 'low') {
        return affairs.filter(ar => ar.priority === 'low')
    } else if (filter === 'all'){
        return affairs
    } else {
        return affairs
    }*/
    if (filter === "all") {
        return affairs
    } else {
        return affairs.filter(el => el.priority === filter)
    }


}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter(ar => ar._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2
            <hr/>
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs} // ЗДЕСЯ
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>

        </div>
    )
}

export default HW2
