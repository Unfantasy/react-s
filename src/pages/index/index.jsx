/**
 * @name: 首页
 */

import React, { Component } from 'react';
import { NoticeBar, Carousel, Tabs, Badge, WhiteSpace, WingBlank } from 'antd-mobile';
import Loading from '../../components/loading';
import carouselImg1 from '../../asset/img/p2328081971.jpg';
import carouselImg2 from '../../asset/img/xixi_02.png';
import carouselImg3 from '../../asset/img/xixi_10.jpg';
import './style.scss';

const tabs = [
  { title: <Badge text={'3'}>First Tab</Badge> },
  { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  { title: <Badge dot>Third Tab</Badge> },
];

export default class extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      initialHeight: 200,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { loading } = this.state;
    return (
      <Loading loading={loading}>
        <NoticeBar mode="closable">欢迎使用react + antd-mobile创建项目</NoticeBar>
        <WhiteSpace size="lg" />
        <Tabs tabs={tabs} initialPage={1} swipeable={false}>
          <div>
            <WingBlank>
              <h3>跑马灯</h3>
            </WingBlank>
            <Carousel
              autoplay={false}
              infinite
              selectedIndex={1}
              swipeSpeed={35}
            >
              <img
                src={carouselImg1}
                alt="carousel示例图片1"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
              <img
                src={carouselImg2}
                alt="carousel示例图片2"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
              <img
                src={carouselImg3}
                alt="carousel示例图片3"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </Carousel>
            <WhiteSpace size="lg" />
            <WingBlank>
              <h4>更多组件请自行查看<a href="https://mobile.ant.design/docs/react/introduce-cn">antd-mobile官方文档</a></h4>
            </WingBlank>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              Content of Second Tab
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
              Content of Third Tab
            </div>
          </div>
        </Tabs>
      </Loading>
    );
  }
}
