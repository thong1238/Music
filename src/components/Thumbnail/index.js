import { image1, image2 } from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './Thumbnail.module.scss';

const cx = classNames.bind(styles);

function Thumbnail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('thumbnail')}>
                <img src={image1} alt="image1" />
            </div>
            <div className={cx('song')}>
                <div className={cx('song-name')}>Hát linh tinh</div>
                <FontAwesomeIcon className={cx('like')} icon={regularHeart} />
                <FontAwesomeIcon className={cx('liked', 'active')} icon={solidHeart} />
                <div className={cx('song-author')}>Thảo Minh</div>
            </div>
        </div>
    );
}

export default Thumbnail;
