import { create } from 'zustand/index'
import { persist } from 'zustand/middleware'

type ScreenData = {
  screen_id: string
  question: string
  answer?: string | string[]
}

type FunnelStore = {
  userAnswers: ScreenData[] | null
  addUserAnswer: (answer: ScreenData) => void
  getScreenState: (id: string) => ScreenData['answer'] | null
}

// const [selected, setSelected] = useState<string[]>(selectedChoices)
//
// const handleSelect = (choiceId: string) => {
//   let newSelected: string[]
//
//   if (selected.includes(choiceId)) {
//     newSelected = selected.filter((id) => id !== choiceId)
//   } else {
//     if (maxSelections && selected.length >= maxSelections) {
//       newSelected = [...selected.slice(1), choiceId]
//     } else {
//       newSelected = [...selected, choiceId]
//     }
//   }
//
//   setSelected(newSelected)
//   onSelect?.(newSelected)
// }

// TODO: add feature to update answers for screen
// TODO: add ability to remove answer for screen
export const useFunnelStore = create<FunnelStore>()(
  persist(
    (set, getState) => ({
      userAnswers: null,
      addUserAnswer: (answer: ScreenData) =>
        set({
          userAnswers: [...(getState()?.userAnswers || []), answer],
        }),
      getScreenState: (id: string) => {
        const { userAnswers } = getState()

        if (!userAnswers || !Object.keys(userAnswers).length) return null

        return userAnswers.find((answer) => answer.screen_id === id)?.answer || null
      },
    }),
    { name: 'funnelUserAnswers' },
  ),
)
