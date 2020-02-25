import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react'
import BScroll from 'better-scroll';

interface ScrollProps {
  direction?: 'vertical' | 'horizental'  //指定滚动方向
  click?: boolean
  refresh?: boolean
  onScroll?: Function | null
  pullUp?: (() => void) | null
  pullDown?: (() => void) | null
  pullUpLoading?: boolean
  pullDownLoading?: boolean
  bounceTop?: boolean
  bounceBottom?: boolean
  children?: React.ReactNode
}

const Scroll: React.FC<ScrollProps> = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();
  const scrollContaninerRef = useRef<HTMLDivElement>(null)

  const { direction, click, refresh, bounceTop, bounceBottom, children } = props;
  const { pullUp, pullDown, onScroll } = props;

  //创建BScroll
  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current as HTMLElement, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll)

    return () => {
      setBScroll(null)
    }
  }, [])

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on("scroll", (srcoll: any) => {
      onScroll(srcoll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      bScroll.off('scrollEnd');
    }
  }, [pullUp, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on('touchEnd', (pos: any) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown();
      }
    });
    return () => {
      bScroll.off('touchEnd');
    }
  }, [pullDown, bScroll]);

  //刷新重置
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh()
    }
  })
  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    }
  }));
  return (
    <div style={{width:'100%', height: '100%', overflow: 'hidden'}} ref={scrollContaninerRef}>
      {children}
    </div>
  )
})
Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
}
export default React.memo(Scroll)
