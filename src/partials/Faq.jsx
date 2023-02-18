import React from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">ChatGPT是什么？</div>,
            content:
                <div className="leading-8 mb-1">
                    <p>ChatGPT是由 OpenAI 开发的一种大型自然语言处理（NLP）模型</p>
                    <ul className="list-decimal leading-8">
                        <li>1. 可以回答关于各种话题的问题，例如历史、科学、文化等。它可以提供相关的信息和细节，并且能够根据上下文作出适当的回应。</li>
                        <li>2. 可以参与自然对话，即能够与人类进行多轮交流，并作出相应的回应。它可以通过文本或语音与人类交流，并理解他们的意图，从而使对话更加流畅自然。</li>
                        <li>3. 可以提供建议和帮助，例如在人类面临某些问题或困难时，它可以提供可行的解决方案。它可以理解人类的需求，并根据他们的问题提供适当的帮助。</li>
                        <li>4. 可以作为学习工具，即人类可以通过与它交流来提高他们的语言能力和知识水平。它可以提供丰富的信息和知识，并且能够持续不断地学习和更新，从而为人类提供更多的学习机会。</li>
                        <li>5. 可以作为客服或人工智能助手使用，即能够与人类进行交流，并帮助他们解决问题。它可以用于提供客户服务或帮助人们完成日常任务，从而提高工作效率和满意度。</li>
                    </ul>
                </div>
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">这个插件可以用来做什么？</div>,
            content:
                <div className="leading-8 mb-1">
                    这个插件可以帮助你快速搭建一个基于微信文件传输助手的智能应答机器人，不需要任何服务器资源，只需要保持微信文件传输助手页面打开即可。
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">这个插件支持微信群聊吗？</div>,
            content:
                <div className="leading-8 mb-1">
                    不支持，这个插件只能当作个人智能助手，无法发送群消息，如果有微信网页版访问权限，可以尝试用<a href="https://chatgpt4wechat.aow.me" target="_blank">微信群聊版</a>
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">插件配置中的 AI 源是什么意思？
            </div>,
            content:
                <div className="leading-8 mb-1">
                    AI 源是否指提供智能应答的 AI 接口，目前支持 ChatGPT 网页版和 OpenAI apikey 两种源，后续计划扩充 <a href="https://bing.com/new">Bing Chat</a> 或国内的一些免费源。如果您需要定制 AI 源可以扫描下方的二维码。
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">插件配置中的 OpenAI 的apikey 如何获得？</div>,
            content:
                <div className="leading-8 mb-1">
                    请访问 OpenAI 官方网站获取，需要付费，请参见：<a href="https://platform.openai.com/account/api-keys" target="_blank">https://platform.openai.com/account/api-keys</a>
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么@机器人，但是没有任何响应</div>,
            content:
                <div className="leading-8 mb-1">
                    <ul className="list-decimal leading-8">
                        <li>1. 请检查是否已经成功安装了 ChatGPT for FileHelper 的浏览器插件。</li>
                        <li>2. 请打开插件配置页面，检查 AI 源配置是否正确</li>
                        <li>3. 如果 AI 源使用的是 ChatGPT，需要保持<a href="https://chat.openai.com/chat" target="_blank"> ChatGPT 网页</a>处于登录状态</li>
                        <li>4. 如果 AI 源使用的是 OpenAI，会获得较稳定的体验【强烈推荐使用】</li>
                    </ul>
                </div>
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么@机器人的消息要好久才收到，感觉响应很慢</div>,
            content:
                <div className="leading-8 mb-1">
                    因为 ChatGPT/OpenAI 的响应是异步数据流，在网页上可以实时刷新数据流响应，但在微信消息中只能等收到完整结果后一次发送，所以体验上感觉会有30秒左右的延迟，具体视 AI 源的响应内容多少而定，这是正常现象。
                </div>
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么会收到“抱歉，ChatGPT服务异常”的消息？</div>,
            content:
                <div className="leading-8 mb-1">
                    <p>以下几种情况可能导致返回上面的错误提示：</p>
                    <ul className="list-decimal leading-8">
                        <li>1. 如果 AI 源选择的 ChatGPT，因为ChatGPT加了cloudflare保护，每隔2小时需要刷新一下ChatGPT页面，如果用户提问后收到上述错误提示，说明<a href="https://chat.openai.com/chat" target="_blank">https://chat.openai.com/chat</a>页面需要刷新或重新登录。</li>
                        <li>2. 如果 AI 源选择的 ChatGPT，因为ChatGPT的并发限制，一次只能发送一条消息。请在发送另一条消息之前等待其他问题的响应完成，或者等待一分钟。</li>
                        <li>3. 如果 AI 源选择的 ChatGPT，因为ChatGPT自身的服务异常，导致请求出错或网络错误等原因。</li>
                        <li>4. 如果 AI 源选择的 OpenAI，需要提供正确的API KEY</li>
                    </ul>
                </div>,
        },
    ],
};

export default function FAQ() {
    return (
        <section className="relative mt-16">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
                    <h1 className="h2 mb-4 tracking-wider">常见问题</h1>
                </div>

                {/* Section content */}
                <div className="mb-16 md:mb-16">
                    <Faq data={data} />
                </div>
            </div>
        </section>
    );
}