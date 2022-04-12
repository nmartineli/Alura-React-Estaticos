import React from 'react';
import styles from './Filter.module.scss';
import filters from './filters.json';
import classNames from 'classnames';

type IOption = typeof filters[0];

interface Props {
	filter: number | null;
	setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}
export default function Filter({ filter, setFilter }: Props) {
	function selectFilter(option: IOption) {
		if (filter === option.id) {
			return setFilter(null);
		}
		return setFilter(option.id);
	}

	return (
		<div className={styles.filtros}>
			{filters.map((option) => (
				<button
					className={classNames({
						[styles.filtros__filtro]: true,
						[styles['filtros__filtro--ativo']]: filter === option.id,
					})}
					key={option.id}
					onClick={() => selectFilter(option)}
				>
					{option.label}
				</button>
			))}
		</div>
	);
}
