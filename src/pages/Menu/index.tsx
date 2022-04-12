import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import Search from './Search';
import { useState } from 'react';
import Filter from './Filter';
import Selector from './Selector';

export default function Menu() {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [selector, setSelector] = useState('');

	return (
		<main>
			<nav className={styles.menu}>
				<Logo />
			</nav>
			<header className={styles.header}>
				<div className={styles.header__text}>A casa do código e da massa</div>
			</header>
			<section className={styles.cardapio}>
				<h3 className={styles.cardapio__titulo}>Cardápio</h3>
				<Search search={search} setSearch={setSearch} />
				<div className={styles.cardapio__filtros}>
					<Filter filter={filter} setFilter={setFilter} />
					<Selector selector={selector} setSelector={setSelector} />
				</div>
			</section>
		</main>
	);
}
