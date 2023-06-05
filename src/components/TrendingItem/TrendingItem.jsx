// import css from './TrendingItem.module.css';

const TrendingItem = ({title, name}) => {
    return (
        <li>
            {title || name}
        </li>
    );
};

export default TrendingItem;