import React from 'react';
import PropTypes, { func } from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import CustomTabs from "js/material-kit-react/CustomTabs/CustomTabs.jsx";
// material-kit-react components
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import worksStyle from 'assets/jss/worksSection';

class Work4 extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<GridItem xs={12} sm={6} md={6}>
				<CustomTabs
					headerColor="primary"
					tabs={[
						{
							tabName: "概要",
							tabContent: (
								<React.Fragment>
									<h2>広告配信システムUI開発</h2>
									<p>2011/10〜2012/06</p>
									<p>
											初めてRuby on Railsに携わることになり導入時は手こずりましたが、ペアプログラミングをすることにより、1ヶ月程で慣れて来てスケジュール通りに対応することができました。<br />
									</p>
								</React.Fragment>
							)
						},
						{
							tabName: "開発環境",
							tabContent: (
								<ul>
									<li>Ruby on Rails</li>
									<li>jQuery</li>
								</ul>
							)
						},
						{
							tabName: "作業内容",
							tabContent: (
								<React.Fragment>
									<ul className={classes.listStyleNone}>
										<li>◆工程</li>
										<li>詳細設計</li>
										<li>実装</li>
										<li>単体テスト、結合テスト</li>
									</ul>
									<ul className={classes.listStyleNone}>
										<li>◆範囲</li>
										<li>フロントエンド、バックエンド</li>
									</ul>
									<ul className={classes.listStyleNone}>
										<li>◆開発手法</li>
										<li>アジャイル開発、テスト駆動開発</li>
									</ul>
								</React.Fragment>
							)
						}
					]}
				/>
			</GridItem>
		);
	};
}

Work4.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(worksStyle)(Work4);