import styles from './Selector.module.scss';
import options from './options.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
	selector: string;
	setSelector: React.Dispatch<React.SetStateAction<string>>;
}

export default function Selector({ selector, setSelector }: Props) {
	const [open, setOpen] = useState(false);
	const selectorName = selector && options.find((option) => option.value === selector)?.nome;

	return (
		<button
			className={classNames({
				[styles.ordenador]: true,
				[styles['ordenador--ativo']]: selector !== '',
			})}
			onClick={() => setOpen(!open)}
			onBlur={() => setOpen(false)}
		>
			<span>{selectorName || 'Ordenar Por'}</span>
			{open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
			<div
				className={classNames({
					[styles.ordenador__options]: true,
					[styles['ordenador__options--ativo']]: open,
				})}
			>
				{options.map((option) => (
					<div className={styles.ordenador__option} key={option.value} onClick={() => setSelector(option.value)}>
						{option.nome}
					</div>
				))}
			</div>
		</button>
	);
}
