import React from 'react';
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
// material-kit-react components
import GridContainer from 'js/material-kit-react/Grid/GridContainer.jsx';
import GridItem from 'js/material-kit-react/Grid/GridItem.jsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// jss
import skillsetPageStyle from 'assets/jss/skillsetSection';

class AboutMyself extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <a name="aboutMyself" />
            <h2 className={classes.title}>Abount Myself</h2>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.gridContent}>
          <Card>
            <CardContent>
              <p>
                15年程の開発経験の中で、要件定義から設計、実装、テストまで経験してまいりました。<br />
                また、1人で開発を担当するような小規模から、300名の大規模システムまで経験しました。<br />
                バックエンド、フロントエンドを一貫して対応可能です。<br />
                実装を得意としており、スピード感については評価頂いております。<br />
                <br />
                新しい技術について興味はあるものの、実際の業務で経験する機会があまりなかったため、勉強会等に参加するなどしてキャッチアップしています。<br />
                当ポートフォリオはNode.jsやモダンなJavascriptの学習目的で作成しました。
              </p>
            </CardContent>
          </Card>
        </GridContainer>
      </div>
    );
  };
}

export default withStyles(skillsetPageStyle)(AboutMyself);