# -*- coding: UTF-8 -*-

with open('../src/utils/sensitive/keyword.txt', 'r', encoding='utf-8') as f:
    data = f.readlines()
    for line in data:
        try:
            print('"' + line.replace('\n', '').encode('utf-8').decode('utf-8') + '",')
        except:
            pass
