const fs = require('fs-extra');
const path = require('path');

async function moveEnPages() {
    const outDir = 'out';
    const enDir = path.join(outDir, 'en');

    try {
        // 重命名 en.html 为 index.html
        const enHtmlPath = path.join(outDir, 'en.html');
        const indexHtmlPath = path.join(outDir, 'index.html');
        if (fs.existsSync(enHtmlPath)) {
            await fs.rename(enHtmlPath, indexHtmlPath);
            console.log('重命名: en.html -> index.html');
        }

        // 确保英文页面目录存在
        if (!fs.existsSync(enDir)) {
            console.error('英文页面目录不存在:', enDir);
            process.exit(1);
        }

        // 将 en 目录下的所有内容复制到 out 目录
        await fs.copy(enDir, outDir);
        console.log('英文页面已复制到根目录');

        // 删除 en 目录
        await fs.remove(enDir);
        console.log('已删除 en 目录');

    } catch (error) {
        console.error('处理文件时出错:', error);
        process.exit(1);
    }
}

moveEnPages(); 