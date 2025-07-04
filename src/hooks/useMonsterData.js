import { useState, useEffect } from 'react'
import { supabase } from '../services/supaBaseClient'

export const useMonsterData = () => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
    const [allMonsters,setAllMonsters] = useState([])

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data, error } = await supabase
          .from('tb_Monster')
          .select('id, monster_data')

        if (error) throw error

        const allMonster = []

        data.forEach(row => {
          const ele = row.monster_data
          const eleId = row.id
          const image = ele.games[0]?.image || 'MH3U-Question_Mark_Icon.png'

          let monster = {
            idEl: eleId,
            id: ele._id.$oid,
            name: ele.name,
            type: ele.type,
            image: image,
            info: ele.games[0].info,
            danger: ele.games[0].danger,
            ailments: ele.ailments,
            isLarge: ele.isLarge,
            element: ele.elements,
            weakness: ele.weakness,
            ...(ele.isLarge && {
              huntTips: [
                ele.huntTips.prepare,
                ele.huntTips.break,
                ele.huntTips.weaknessSign,
                ele.huntTips.image
              ]
            }),
            dropsLowRank: ele.drops.lowRank,
            dropsHighRAnk: ele.drops.highRank
          }
          allMonster.push(monster);
        })
        setAllMonsters(allMonster);
      } catch (error) {
        console.error('Error fetching monsters:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchMonsters()
  }, [])
  return {
    allMonsters,
    loading,
    error,
  }
}
