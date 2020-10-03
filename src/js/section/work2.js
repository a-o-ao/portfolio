import React from 'react';
import PropTypes, { func } from 'prop-types';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import CustomTabs from "js/material-kit-react/CustomTabs/CustomTabs.jsx";
// material-kit-react components
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
// jss
import worksStyle from 'assets/jss/worksSection';

class Work2 extends React.Component {
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
								<h2>ストックフォト販売サイト</h2>
								<p>2015/03〜2016/08</p>
								<p>
									既存システムのリニューアルに伴い、ユーザからどのようなサービスが求められるのか、お客様と一緒に考えながら提案していくことができました。<br />
									写真を扱うシステムのため、ユーザが直感的に操作できるようなUIを、Javascriptを使って実現しました。<br />
									チームのJavascriptに対するレベルが低かったため、勉強会を開くなどしてチーム全体のレベルアップに努めました。
								</p>
							</React.Fragment>
						)
					},
					{
						tabName: "開発環境",
						tabContent: (
							<ul>
								<li>PHP7.0</li>
								<li>CakePHP</li>
								<li>jQuery</li>
								<li>Bootstrap</li>
								<li>MySQL</li>
								<li>LAMP</li>
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
									<li>実装</li>
									<li>単体テスト</li>
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

Work2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(worksStyle)(Work2);