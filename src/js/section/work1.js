import React from 'react';
import PropTypes, { func } from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import CustomTabs from "js/material-kit-react/CustomTabs/CustomTabs.jsx";
// material-kit-react components
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import worksStyle from 'assets/jss/worksSection';

class Work1 extends React.Component {
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
									<h2>人材マッチングシステム</h2>
									<p>2016/09〜</p>
									<p>
										学生と企業をマッチングするシステムの新規開発。<br />
										スタートアップ企業にて創業時から開発を担当しました。<br />
										バックエンド、フロントエンドの開発を担当しました。<br />
										一人称で設計、実装、テストまで対応する能力が求められました。<br />
										また、複数の案件を同時進行で進めていたため、スピード感と臨機応変な対応が求められました。
									</p>
								</React.Fragment>
							)
						},
						{
							tabName: "開発環境",
							tabContent: (
								<ul>
									<li>Java(7, 11)</li>
									<li>SpringBoot</li>
									<li>jQuery</li>
									<li>HTML, LESS, Bootstrap</li>
									<li>MySQL</li>
									<li>AWS(EC2, S3), Apache, Tomcat</li>
								</ul>
							)
						},
						{
							tabName: "作業内容",
							tabContent: (
								<React.Fragment>
									<ul className={classes.listStyleNone}>
										<li>◆工程</li>
										<li>基本設計、詳細設計</li>
										<li>実装</li>
										<li>単体テスト、結合テスト、負荷テスト(JMeter)</li>
										<li>保守対応</li>
									</ul>
									<ul className={classes.listStyleNone}>
										<li>◆範囲</li>
										<li>フロントエンド、バックエンド</li>
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

Work1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(worksStyle)(Work1);