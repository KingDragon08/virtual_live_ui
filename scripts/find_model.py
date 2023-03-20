# -*- coding: UTF-8 -*-

import os
import json
import uuid

folder = '../public/assets/models'

models = []

def walk(root):
    g = os.walk(root)
    for path, dir_list, file_list in g:
        for dir in dir_list:
            walk(os.path.join(path, dir))
        for file in file_list:
            if file.find('model.json') > -1 or file.find('model3.json') > -1:
                preview = ""
                for p in os.listdir(path):
                    if p.find('.png') > -1 or p.find('.jpg') > -1 or p.find('.jpeg') > -1:
                        preview = os.path.join(path, p)
                models.append({
                    "name": path,
                    "path": os.path.join(path, file),
                    "preview": preview,
                    "uuid": uuid.uuid4().hex
                })

walk(folder)
with open('model.json', 'w') as json_file:
    json_file.write(json.dumps(models, indent = 2))