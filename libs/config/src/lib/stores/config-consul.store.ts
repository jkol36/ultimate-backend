/*******************************************************************************
 * Copyright (c) 2021. Rex Isaac Raphael
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 * File name:         config-consul.store.ts
 * Last modified:     07/02/2021, 11:30
 ******************************************************************************/

import { IConfigStore } from '../interfaces';
import { Injectable, OnModuleInit } from '@nestjs/common';
import dotenv from 'dotenv';

@Injectable()
export class ConfigConsulStore implements IConfigStore, OnModuleInit {
  // constructor() {} // private readonly internalConfig: Record<string, any> = {}, // @Inject(CONFIGURATION_TOKEN) // @Optional()

  onModuleInit(): any {
    // TODO: Fix soon
  }

  get<T extends any>(path: string, defaultValue: T): Promise<T> | T | undefined;
  get<T extends any>(path: string): Promise<T> | T | undefined;

  get<T extends any>(path: string, defaultValue?): Promise<T> | T | undefined {
    return undefined;
  }

  set(path: string, value: string): Promise<void> {
    return Promise.resolve(undefined);
  }

  watch<T extends any>(paths: string): void {
    // TODO: Fix soon
  }
}