import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg1 from '../images/features-1.jpg';
import FeaturesBg2 from '../images/features-2.jpg';
import FeaturesBg3 from '../images/features-3.jpg';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h1 className="h2 mb-4 tracking-wider">如何使用</h1>
        </div>

        {/* Section content */}
        <div className="md:grid md:grid-cols-12 md:gap-6">

          {/* Content */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-5" data-aos="fade-right">
            {/* Tabs buttons */}
            <div className="mb-8 md:mb-0">
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-wide mb-1">1. 安装ChatGPT for FileHelper浏览器插件</div>
                  <div className="text-gray-600">按照上面的链接安装浏览器插件，若无法访问 Chrome Store 请下载离线安装包</div>
                </div>
              </a>
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-wide mb-1">2. 打开微信文件传输助手网页版</div>
                  <div className="text-gray-600">微信文件传输助手：<a className="text-blue-500" href="https://filehelper.weixin.qq.com" target="_blank">filehelper.weixin.qq.com</a>，如果无法访问请终止后续步骤</div>
                </div>
              </a>
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-wide mb-1">3. 选择 AI 源，发送消息 @gpt 验证是否响应</div>
                  <div className="text-gray-600">在插件配置页面提供了两种 AI 源，ChatGPT <span className="text-green-500">（推荐）</span> 和 OpenAI apikey</div>
                </div>
              </a>
            </div>
          </div>

          {/* Tabs items */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-7 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
            <div className="relative flex flex-col text-center lg:text-right">
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="w-full relative inline-flex flex-col">
                  <img className="md:max-w-none mx-auto rounded" src={FeaturesBg1} width="100%" height="100%" alt="安装ChatGPT for FileHelper浏览器插件" />
                </div>
              </Transition>
              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="w-full relative inline-flex flex-col">
                  <img className="md:max-w-none mx-auto rounded" src={FeaturesBg2} width="100%" height="100%" alt="打开微信文件传输助手网页版" />
                </div>
              </Transition>
              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="w-full relative inline-flex flex-col">
                  <img className="md:max-w-none mx-auto rounded" src={FeaturesBg3} width="100%" height="100%" alt="选择 AI 源，发送消息 @gpt 验证是否响应" />
                </div>
              </Transition>
            </div>
          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
