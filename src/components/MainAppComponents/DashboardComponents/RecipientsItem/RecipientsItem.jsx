import './recipientsItem.css';

import ListLine from '../../ListLine/ListLine';

import { notificationsType } from '../../../../helpers/NotificationsType';
import SmallDivider from '../../SmallDivider/SmallDivider';
import OptionsItem from '../OptionsItem/OptionsItem';
import CheckBoxComponent from '../../../LogIn-SingUp/CheckBoxComponent/CheckBoxComponent';
import { Link } from 'react-router-dom';

const RecipientsItem = ({
	id,
	name,
	type,
	recipientsImg,
	notificationOptions,
	city,
	district,
	isCheckedAll,
	isDarkMode,
}) => {
	const currentOptionsList = () => {
		return notificationsType.filter(type =>
			notificationOptions.some(currentOptions => currentOptions.id === type.id)
		);
	};

	//console.log(currentOptionsList());

	return (
		<li>
			<ListLine>
				<div className='recipient-item-column column-width-type2'>
					<div className='recipient-item-row'>
						<div className='recipient-item-column-center column-width-type4'>
							<CheckBoxComponent
								isCheckedAll={isCheckedAll}
								name={'openForAllSelected'}
								id={id}
							/>
						</div>
						<div className='recipient-item-column column-width-type4'>
							<img
								className='recipient-img'
								src={recipientsImg}
								alt='recipientImg'
							/>
						</div>
						<div className='recipient-item-column column-width-type1'>
							<div className='recipient-text-medium'>{name}</div>
						</div>
					</div>
				</div>
				<div className='recipient-item-column-center column-width-type1'>
					<div className='recipient-text-regular'>{type}</div>
				</div>
				<div className='recipient-item-column-center column-width-type3'>
					<ul className='notification-options-list'>
						{currentOptionsList().map(option => {
							return (
								<OptionsItem
									key={option.id}
									title={option.title}
									color={option.color}
									bgColor={option.bgColor}
									colorDark={option.colorDark}
									bgColorDark={option.bgColorDark}
									isDarkMode={isDarkMode}
								/>
							);
						})}
					</ul>
				</div>
				<div className='recipient-item-column-center column-width-type1'>
					<div className='recipient-text-regular'>
						{city}, {district}
					</div>
				</div>
				<div className='recipient-item-column column-width-type1'>
					<Link to='' className='recipient-btn' id={id}>
						<span className='recipient-btn-text'>Details</span>
					</Link>
				</div>
			</ListLine>
			<SmallDivider />
		</li>
	);
};
export default RecipientsItem;
