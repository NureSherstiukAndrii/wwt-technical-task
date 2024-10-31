import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { FilterChooseOption } from '@api/types/Filter'
import { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

interface Filter {
	id: string
	name: string
	description: string
	options: FilterChooseOption[]
	type: string
}

interface FiltersData {
	allFilters: Filter[] | null
	selectedFilters: Record<string, FilterChooseOption[]>
	setAllFilters: (filters: SearchRequestFilter) => void
	updateSelectedFilters: (id: string, options: FilterChooseOption[]) => void
	resetSelectedFilters: () => void
}

export const useFiltersStore = create<FiltersData>()(
	devtools(
		persist(
			set => ({
				allFilters: null,
				selectedFilters: {},
				setAllFilters: data => set({ allFilters: data }),
				updateSelectedFilters: (id, options) =>
					set(state => ({
						selectedFilters: {
							...state.selectedFilters,
							[id]: options
						}
					})),
				resetSelectedFilters: () => set({ selectedFilters: {} })
			}),
			{ name: 'filtersStore' }
		)
	)
)
