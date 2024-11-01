import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { FilterChooseOption } from '@api/types/Filter'

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
	tempSelectedFilters: Record<string, FilterChooseOption[]>
	setAllFilters: (filters: Filter[]) => void
	updateTempSelectedFilters: (id: string, options: FilterChooseOption[]) => void
	resetFilters: () => void
	confirmFilters: () => void
	discardFilters: () => void
}

export const useFiltersStore = create<FiltersData>()(
	devtools(
		persist(
			set => ({
				allFilters: null,
				selectedFilters: {},
				tempSelectedFilters: {},
				setAllFilters: data => set({ allFilters: data }),
				updateTempSelectedFilters: (id, options) =>
					set(state => ({
						tempSelectedFilters: {
							...state.tempSelectedFilters,
							[id]: options
						}
					})),
				resetFilters: () => {
					set({ selectedFilters: {} })
					set({ tempSelectedFilters: {} })
				},
				confirmFilters: () =>
					set(state => ({ selectedFilters: state.tempSelectedFilters })),
				discardFilters: () =>
					set(state => ({
						tempSelectedFilters: state.selectedFilters
					}))
			}),
			{ name: 'filtersStore' }
		)
	)
)
