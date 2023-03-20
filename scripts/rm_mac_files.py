# -*- coding: UTF-8 -*-

import os

folder = '../public/assets/models'

def walk(root):
    g = os.walk(root)
    for path, dir_list, file_list in g:
        for dir in dir_list:
            if dir == '__MACOSX':
                os.removedirs(os.path.join(path, dir))
                print(os.path.join(path, dir))
        for file in file_list:
            if file == '.DS_Store':
                os.remove(os.path.join(path, file))
                print(os.path.join(path, file))

walk(folder)