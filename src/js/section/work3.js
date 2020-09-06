import React from 'react';
import PropTypes, { func } from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import CustomTabs from "js/material-kit-react/CustomTabs/CustomTabs.jsx";
// material-kit-react components
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import worksStyle from 'assets/jss/worksSection';

class Work3 extends React.Component {
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
									<h2>PaaSサービスUI開発</h2>
									<p>2013/07〜2014/12</p>
									<p>
										SPAのフロントエンドの新規開発を担当しました。<br />
										フレームワークの選定やアーキテクト、実装メンバーの技術サポートを担当しました。<br />
										また、お客様先に出向いて要件定義をおこないました。<br />
										実装からはJIRAを使用したスクラム開発を経験しました。<br />
										SeleniumやQUnitを使用してテストを自動化しました。
									</p>
								</React.Fragment>
							)
						},
						{
							tabName: "開発環境",
							tabContent: (
								<ul>
									<li>CakePHP</li>
									<li>jQuery</li>
									<li>BackboneJS</li>
									<li>Selenium</li>
									<li>QUnit</li>
									<li>Amazon Linux AMI</li>
								</ul>
							)
						},
						{
							tabName: "作業内容",
							tabContent: (
								<React.Fragment>
									<ul className={classes.listStyleNone}>
										<li>◆工程</li>
										<li>要件定義、基本設計、詳細設計</li>
										<li>実装、単体テスト</li>
									</ul>
									<ul className={classes.listStyleNone}>
										<li>◆範囲</li>
										<li>フロントエンド</li>
									</ul>
									<ul className={classes.listStyleNone}>
										<li>◆開発手法</li>
										<li>スクラム開発(JIRA)</li>
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

Work3.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(worksStyle)(Work3);