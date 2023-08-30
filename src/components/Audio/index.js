import classNames from 'classnames/bind';
import styles from './FavorateSong.module.scss';

const cx = classNames.bind(styles);

function Audio({ src, controls }) {
    return (
        <audio className={cx('audio')} controls={controls}>
            <source src={src} type="audio/mpeg" />
        </audio>
    );
}

export default Audio;
