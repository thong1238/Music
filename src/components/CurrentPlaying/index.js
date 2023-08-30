import { image1 } from '~/assets/images';

import classNames from 'classnames/bind';
import styles from './CurrentPlaying.module.scss';

const cx = classNames.bind(styles);

function CurrentPlaying({ menu }) {
    const classes = cx('playing', { menu });
    return (
        <div className={classes}>
            <img className={cx('curr-img')} src={image1} alt="image1" />
            <div className={cx('name-author')}>
                <div className={cx('song-name')}>Hát linh tinh</div>
                <div className={cx('song-author')}>Thảo Minh</div>
            </div>
        </div>
    );
}

export default CurrentPlaying;
