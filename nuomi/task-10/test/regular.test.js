describe('手机正则测试', function() {
  it('正向测试, 18812011232', function() {
    regphone(18812011232).should.be.true();
  });
  it('反向测试, 18812312', function() {
    regphone(18812312).should.be.false();
  });
  it('反向测试, 12345678909', function() {
    regphone(18812312).should.be.false();
  });
});
describe('重复单词正则测试', function() {
  it('正向测试, foo foo bar', function() {
    repWord('foo foo bar').should.be.true();
  });
  it('反向测试, foo bar foo', function() {
    repWord('foo bar foo').should.be.false();
  });
  it('反向测试, foo barbar bar', function() {
    repWord('foo barbar bar').should.be.false();
  });
});
describe('邮箱正则测试', function() {
  it('正向测试, windgoole0509@gmail.com', function() {
    regEmail('windgoole0509@gmail.com').should.be.true();
  })
  it('反响测试 wind.goole---05.09@gmail.com', function() {
    regEmail('wind.goole-0509@gmail.com').should.be.false();
  })
  it('反响测试 wind.goole+0509@gmail.com', function() {
    regEmail('wind.goole-0509@gmail.com').should.be.false();
  })
});
describe('URL 正则测试', function() {
  it('正向测试, www.baidu.com', function() {
    regURL('www.baidu.com').should.be.true();
  })
  it('反响测试 abc://baidu.com', function() {
    regURL('abc://baidu.com').should.be.false();
  })
  it('反响测试 wind.goole+0509@gmail.com', function() {
    regURL('wind.goole-0509@gmail.com').should.be.false();
  })
});
describe('密码正则测试', function() {
  it('正向测试, a1234576', function() {
    regPassword('a1234576').should.be.true();
  })
  it('反响测试 12dfgdgdg2', function() {
    regPassword('12dfgdgdg2').should.be.false();
  })
  it('反响测试 qwertyuioplkjhgfdaszxcxv', function() {
    regPassword('qwertyuioplkjhgfdaszxcxv').should.be.false();
  })
});
describe('中文正则测试', function() {
  it('正向测试, 中文匹配', function() {
    regChinese('中文匹配').should.be.eql('中文匹配');
  })
  it('反向测试, qwer中文匹配123', function() {
    regChinese('qwer中文匹配123').should.be.eql('中文匹配');
  })
  it('反向测试, qwer饕y鬄e匹t配123', function() {
    regChinese('qwer饕y鬄e匹t配123').should.be.eql('饕鬄匹配');
  })
});
describe('html 标签正则测试', function() {
  it('正向测试, <body>content</body>', function() {
    regHtml('<body>content</body>').should.be.true();
  })
  it('反向测试, content', function() {
    regHtml('content').should.be.false();
  })
  it('反向测试, <body>content</err>', function() {
    regHtml('<body>content</err>').should.be.false();
  })
});
describe('空行正则测试', function() {
  it('正向测试, spaceline', function() {
    regSpaceLine('spaceline').should.be.false();
  })
  it('反向测试, spaceline', function() {
    regSpaceLine('spaceline').should.be.false();
  })
  it('反向测试, space   line', function() {
    regSpaceLine('space   line').should.be.false();
  })
})
