/// <reference types="bluebird" />
import * as Promise from 'bluebird';
import { TopicCollection } from './classifier';
import { PlatformMiddleware } from './types/platform';
import { Intent, IncomingMessage, IntentGenerator, ReducerFunction, GreetingFunction, DialogFunction } from './types/bot';
import { UserMiddleware, User, BasicUser } from './types/user';
export { TopicCollection } from './classifier';
export { Intent, PlatformMiddleware };
import Script from './script';
export declare const defaultClassifierDirectories: Array<string>;
export default class Botler {
    debugOn: Boolean;
    private intents;
    private reducer;
    private userMiddleware;
    private platforms;
    private scripts;
    private greetingScript;
    private onErrorScript;
    constructor(classifierFiles?: Array<string | TopicCollection>);
    addIntent(newIntent: IntentGenerator): this;
    unshiftIntent(newIntent: IntentGenerator): this;
    newScript(name?: string): Script;
    getScript(name?: string): Script;
    addGreeting(script: GreetingFunction): this;
    setReducer(newReducer: ReducerFunction): this;
    setUserMiddlware(middleware: UserMiddleware): this;
    addPlatform(platform: PlatformMiddleware): this;
    addErrorHandler(dialog: DialogFunction): this;
    turnOnDebug(): this;
    createEmptyIntent(): Intent;
    createEmptyUser(defaults?: any): User;
    start(): void;
    stop(): void;
    processGreeting(user: BasicUser): Promise<void>;
    processMessage(basicUser: BasicUser, message: IncomingMessage): Promise<void>;
    private getIntents(user, message);
    private _process(user, request, response);
}
