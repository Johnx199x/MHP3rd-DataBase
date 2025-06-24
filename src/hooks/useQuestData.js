import { useState, useEffect } from 'react'
import { supabase } from '../services/supaBaseClient'

export const useQuestData = () => {
  const [questState, setQuestState] = useState([])

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const { data, error } = await supabase
          .from('tb_Quest') // Nombre de la tabla
          .select('id, quest_data')
        if (error) throw error

        const questArr = []

        data.forEach(row => {
          const ele = row.quest_data
          const eleId = row.id

          let quest = {
            idEl: eleId, // ID de la fila en la base de datos
            id: ele._id.$oid,
            client: ele.client,
            name: ele.name,
            description: ele.description,
            reward: ele.reward,
            map: ele.map,
            isKey: ele.isKey,
            questType: ele.questType,
            game: ele.game,
            difficulty: ele.difficulty,
            objetive: ele.objective,
            targets: ele.targets || undefined
          }
          questArr.push(quest)
        })

        setQuestState(questArr)
      } catch (error) {
        console.error('Error fetching quests:', error)
        throw error
      }
    }

    fetchQuests()
  }, [])
  return {
    quest: [questState, setQuestState]
  }
}
