document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ JavaScript已加载！');
    
    const outputContent = document.getElementById('output-content');
    const loadTime = document.getElementById('load-time');
    
    // 设置加载时间
    if (loadTime) {
        loadTime.textContent = new Date().toLocaleString('zh-CN');
        console.log('✅ 加载时间已设置');
    }
    
    // 模拟获取Git信息
    function updateGitInfo() {
        const repoName = document.getElementById('repo-name');
        const currentBranch = document.getElementById('current-branch');
        const lastCommit = document.getElementById('last-commit');
        
        if (repoName) repoName.textContent = 'wjh747770454-creator/CodeForceWeb';
        if (currentBranch) currentBranch.textContent = 'main';
        if (lastCommit) lastCommit.textContent = new Date().toLocaleDateString('zh-CN');
        
        console.log('✅ Git信息已更新');
    }
    
    // 输出日志函数
    function logToOutput(message, type = 'info') {
        if (!outputContent) {
            console.error('❌ 找不到output-content元素');
            return;
        }
        
        const timestamp = new Date().toLocaleTimeString('zh-CN', {hour12: false});
        const typePrefix = type === 'error' ? '[❌]' : type === 'success' ? '[✅]' : '[ℹ️]';
        const logEntry = `${timestamp} ${typePrefix} ${message}\n`;
        outputContent.textContent += logEntry;
        outputContent.scrollTop = outputContent.scrollHeight;
        
        console.log('📝 输出日志:', message);
    }
    
    // 更新状态函数
    function updateStatus(elementId, status, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = message;
            element.className = 'status-badge ' + status;
            console.log(`✅ 更新状态 ${elementId}: ${message}`);
        } else {
            console.error(`❌ 找不到元素: ${elementId}`);
        }
    }
    
    // 模拟流水线运行
    const simulateBtn = document.getElementById('simulate-pipeline');
    if (simulateBtn) {
        simulateBtn.addEventListener('click', function() {
            console.log('🎬 开始模拟流水线...');
            logToOutput('开始模拟GitHub Actions流水线运行...', 'info');
            
            // 重置状态
            updateStatus('status-lint', 'pending', '待运行');
            updateStatus('status-test', 'pending', '待运行');
            updateStatus('status-build', 'pending', '待运行');
            
            // 模拟步骤1：代码检查
            updateStatus('status-lint', 'running', '运行中...');
            setTimeout(() => {
                updateStatus('status-lint', 'success', '通过');
                logToOutput('代码检查完成：未发现语法错误', 'success');
                
                // 模拟步骤2：测试
                updateStatus('status-test', 'running', '运行中...');
                setTimeout(() => {
                    updateStatus('status-test', 'success', '通过');
                    logToOutput('测试执行完成：12个测试全部通过', 'success');
                    
                    // 模拟步骤3：构建
                    updateStatus('status-build', 'running', '运行中...');
                    setTimeout(() => {
                        updateStatus('status-build', 'success', '通过');
                        logToOutput('构建完成：生成dist目录，包含5个文件', 'success');
                        logToOutput('🎉 流水线执行成功！所有步骤完成。', 'success');
                        console.log('✅ 流水线模拟完成');
                    }, 1500);
                }, 1500);
            }, 1500);
        });
        console.log('✅ 模拟流水线按钮已绑定');
    } else {
        console.error('❌ 找不到simulate-pipeline按钮');
    }
    
    // 其他按钮事件
    const btnTest = document.getElementById('btn-test');
    if (btnTest) {
        btnTest.addEventListener('click', function() {
            logToOutput('执行单元测试...', 'info');
            setTimeout(() => {
                logToOutput('测试结果：5个测试套件，23个测试用例全部通过', 'success');
            }, 1000);
        });
    }
    
    const btnBuild = document.getElementById('btn-build');
    if (btnBuild) {
        btnBuild.addEventListener('click', function() {
            logToOutput('开始构建项目...', 'info');
            setTimeout(() => {
                logToOutput('构建完成：优化了CSS和JavaScript文件', 'success');
                logToOutput('生成了生产环境版本：dist/index.html, dist/main.css, dist/main.js', 'success');
            }, 1000);
        });
    }
    
    const btnDeploy = document.getElementById('btn-deploy');
    if (btnDeploy) {
        btnDeploy.addEventListener('click', function() {
            logToOutput('开始模拟部署到GitHub Pages...', 'info');
            setTimeout(() => {
                logToOutput('部署成功！网站已发布到：https://wjh747770454-creator.github.io/CodeForceWeb', 'success');
            }, 1500);
        });
    }
    
    // 清空输出
    const clearOutput = document.getElementById('clear-output');
    if (clearOutput) {
        clearOutput.addEventListener('click', function() {
            if (outputContent) {
                outputContent.textContent = '';
                logToOutput('输出已清空', 'info');
            }
        });
    }
    
    // 初始化
    updateGitInfo();
    logToOutput('CodeForceWeb项目已加载，等待操作...', 'info');
    logToOutput('GitHub用户：wjh747770454-creator', 'info');
    logToOutput('邮箱：wjh747770454@gmail.com', 'info');
    
    console.log('✅ 所有初始化完成');
});